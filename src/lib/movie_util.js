const reducerUtils = {
    initial: (data = null) => ({
        data,
        loading: false,
        error: null
    }),
    loading: (prevState = null) => ({
        data: prevState,
        loading: true,
        error: null
    }),
    success: data => ({
        data,
        loading: false,
        error: null
    })
};

export default reducerUtils;
