import { useEffect, useReducer, useState } from 'react'
import axios from 'axios'

const initialState = {
    loading: false,
    fetched: false,
    error: null,
    data: null,
    sendData: null,
    count: null,
    hasNext: false,
    nextUrl: null,
    method: null,
    headers: null
}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'FETCH_INIT':
            return {
                ...state,
                loading: true,
                fetched: false,
                data: null,
                error: null,
                headers: null
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                fetched: true,
                sendData: null,
                data: action.payload.data
            }
        case 'FETCH_FAIL':
            return {
                ...state,
                loading: false,
                fetched: true,
                sendData: null,
                error: action.payload.error
            }
        case 'SET_METHOD':
            return {
                ...state,
                method: action.payload
            }
        case 'SET_SEND_DATA':
            return {
                ...state,
                sendData: action.payload
            }
        case 'SET_HEADER':
            return {
                ...state,
                headers: action.payload
            }
    }
}

const useAxios = () => {
    const [url, setUrl] = useState('')
    const [refetched, setRefetched] = useState(false)
    const [state, dispatch] = useReducer(reducer, initialState)

    /**
     * 기본적으로 호출하는 함수
     * 메소드와 URL에 대한 아주 간단한 유효성 검사 이후 호출
     */
    const request = (
        method: string,
        url: string,
        headers: any,
        sendData: any
    ) => {
        if (isMethod(method)) {
            if (url !== '' && url.length > 0) {
                dispatch({ type: 'SET_METHOD', payload: method })
                if (!!sendData) {
                    dispatch({ type: 'SET_SEND_DATA', payload: sendData })
                }

                if (!!headers)
                    dispatch({ type: 'SET_HEADER', payload: headers })
                setUrl(url)
            } else {
                throw new Error('URL is empty.')
            }
        } else {
            throw new Error(
                'Invalid method. Method is GET, POST, PUT, DELETE, HEAD, OPTIONS, TRACE, CONNECT'
            )
        }
    }
    /**
     * URL이 변경되지 않았을때 다시 호출하는 함수
     */
    const refetch = () => {
        if (url !== null && url.length > 0) setRefetched(!refetched)
        else throw new Error('URL is empty. You must call request() function.')
    }

    /**
     * HTTP Method 테스트 확인하는 함수
     */
    const isMethod = (method: any) => {
        const defaultMethod = [
            'GET',
            'POST',
            'PUT',
            'DELETE',
            'HEAD',
            'OPTIONS',
            'TRACE',
            'CONNECT'
        ]

        if (defaultMethod.includes(method.toUpperCase())) return true
        return false
    }

    /**
     * Fetch business logic
     */
    useEffect(() => {
        let didCancel = false
        const { method, sendData, headers: additionalHeaders } = state
        let headers = {}

        headers = {
            ...additionalHeaders
        }
        const fetchData = async () => {
            if (!url) {
                return
            }

            dispatch({ type: 'FETCH_INIT' })

            try {
                const result = await axios({
                    url: url,
                    method: method,
                    data: sendData,
                    headers: headers
                })

                if (!didCancel) {
                    dispatch({
                        type: 'FETCH_SUCCESS',
                        payload: { data: result.data }
                    })
                }
            } catch (error) {
                if (!didCancel) {
                    dispatch({
                        type: 'FETCH_FAIL',
                        payload: { error: error }
                    })
                }
            }
        }

        fetchData()

        return () => {
            didCancel = true
        }
    }, [url, refetched, state.method, state])

    return {
        ...state,
        data: state.data,
        request,
        refetch
    }
}

export default useAxios
