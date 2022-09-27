import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td width="20%">
                <PriceHighlight variant='income'>
                  R$ 12.000,00
                </PriceHighlight>
              </td>
              <td width="20%">Venda</td>
              <td width="10%">13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hambúrguer</td>
              <td width="20%">
                <PriceHighlight variant='outcome'>
                  -R$ 24,00
                </PriceHighlight>
              </td>
              <td width="20%">Alimentação</td>
              <td width="10%">10/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionContainer>
    </div>
  )
}