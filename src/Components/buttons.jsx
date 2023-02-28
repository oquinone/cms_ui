import Button from 'react-bootstrap/Button';

const UiButton = (props) => {

    const {
        title,
        variant = 'Primary',
        href = '',
        type = '',
        value = '',
        size = '',

    } = props;

    const inputProps = {
        variant, 
        href, 
        type, 
        value, 
        size
    }

    return (<Button {...inputProps}>{title}</Button>)
}

export default UiButton;