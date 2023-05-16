import  styled  from 'styled-components';

export const Container = styled.div`
    figure {
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;

        img {
            width: 500px;
        }
    } 
    .rw-client,
    .rw-header.rw-with-subtitle,
    .rw-launcher,
    .css-gjf0f1 {
        background: ${props => props.color}
    }

    .rw-conversation-container .rw-send .rw-send-icon-ready {
        fill: ${props => props.color}
    }
`;