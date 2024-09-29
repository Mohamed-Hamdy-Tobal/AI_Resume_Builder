export const formatDate = (dateString) => {
    if (dateString) {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date);
    }
};
