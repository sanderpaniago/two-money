import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;

    section {
        background: var(--blue);
        border-radius: .25rem;
        max-width: 400px;
        width: 100%;

        padding: 4rem 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        p {
            color: #FFF;
            font-size: 1.5rem;
            margin-bottom: 2rem;
        }
    }

`