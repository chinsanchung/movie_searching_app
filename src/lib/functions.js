export const runtime_change = runtime => {
    const hour = parseInt(runtime / 60);
    const min = runtime % 60;

    return `${hour}h ${min}m`;
};
