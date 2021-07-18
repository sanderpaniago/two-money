import { Container, Content } from './styles'

type HeaderProps = {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {
    
    return (
        <Container>
            <Content>
                <img src='/assets/logo.svg' alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}