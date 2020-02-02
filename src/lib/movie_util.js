const reducerUtils = {
    initial: (data = null) => ({
        data,
        loading: false,
        error: false
    }),
    loading: (prevState = null) => ({
        data: prevState,
        loading: true,
        error: false
    }),
    success: data => ({
        data,
        loading: false,
        error: false
    }),
    error: (prevState = null) => ({
        data: prevState,
        loading: false,
        error: true
    })
};

export default reducerUtils;
