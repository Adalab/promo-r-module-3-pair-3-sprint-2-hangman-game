import '../styles/Loading.scss';

function Loading(props) {
    return (
        props.isLoading ? <span className="loading" /> : null 
    );
}

export default Loading;