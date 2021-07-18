import { GetStaticProps } from "next";
import { useTransaction } from "../../hooks/useTransaction";
import { Container } from "./styles";

export function Summary() {
    const {transactions} = useTransaction()

    const summary = transactions?.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraw += transaction.amount
            acc.total -= transaction.amount
        }

        return acc;
    }, {
        deposits: 0,
        withdraw: 0,
        total: 0,
    })
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src='/assets/income.svg' alt="entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary?.deposits)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src='/assets/outcome.svg' alt="saidas" />
                </header>
                <strong>- 
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary?.withdraw)}
                </strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src='/assets/total.svg' alt="total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary?.total)}
                </strong>
            </div>
        </Container>
    )
}
