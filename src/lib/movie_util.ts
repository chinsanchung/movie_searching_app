const movieUtils = {
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
    success: (data: any) => ({
        data,
        loading: false,
        error: false
    }),
    error: () => ({
        data: null,
        loading: false,
        error: true
    })
};

export default movieUtils;
