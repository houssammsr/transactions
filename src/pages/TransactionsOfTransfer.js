import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TransactionsOfTransfer.css";
const TransactionsOfTransfer = () => {
  const navigate = useNavigate();

  const onPayoutButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onIncomeButtonClick = useCallback(() => {
    navigate("/transactionsofincome");
  }, [navigate]);

  const onAllocationButtonClick = useCallback(() => {
    navigate("/transactionsofallocation");
  }, [navigate]);

  const onBtnPreviousClick = useCallback(() => {
    //TODO: go to previous
  }, []);

  const onBtnNextClick = useCallback(() => {
    //TODO: go to next
  }, []);

  return (
    <div className="transactions-of-transfer">
      <div className="transactions-transfer-containe">
        <div className="buttonssearchtable">
          <div className="buttonssearch">
            <div className="transaction-types-buttons1">
              <button className="payout-button1" onClick={onPayoutButtonClick}>
                <div className="payout1">Payout</div>
              </button>
              <button className="income-button1" onClick={onIncomeButtonClick}>
                <div className="payout1">Income</div>
              </button>
              <button
                className="allocation-button1"
                onClick={onAllocationButtonClick}
              >
                <div className="payout1">Allocation</div>
              </button>
              <button className="transfer-button1">
                <div className="transfer1">Transfer</div>
              </button>
            </div>
            <input
              className="search-input1"
              type="text"
              placeholder="search here..."
            />
          </div>
          <div className="transactions-container1">
            <div className="t-head1">
              <div className="transaction-id-title1">
                <div className="related-id-tit">Transaction ID</div>
              </div>
              <div className="related-id-title">
                <div className="related-id-tit">Related ID</div>
              </div>
              <div className="full-name-title1">
                <div className="related-id-tit">Full Name</div>
              </div>
              <div className="article-name-title1">
                <div className="related-id-tit">Article Name</div>
              </div>
              <div className="type-title1">
                <div className="related-id-tit">Type</div>
              </div>
              <div className="payment-method-title1">
                <div className="related-id-tit">Payment methode</div>
              </div>
              <div className="creation-date-title1">
                <div className="related-id-tit">Date</div>
              </div>
              <div className="amount-title1">
                <div className="related-id-tit">Amount</div>
              </div>
            </div>
            <div className="transactions-listing1">
              <div className="t-head1">
                <div className="transaction-id-title1">
                  <div className="related-id-var">#TR-0002</div>
                </div>
                <div className="related-id-title">
                  <div className="related-id-var">2</div>
                </div>
                <div className="full-name-title1">
                  <div className="related-id-var">Mansour Houssam</div>
                </div>
                <div className="article-name-title1">
                  <div className="related-id-var">منحة الوفاة</div>
                </div>
                <div className="type-title1">
                  <div className="related-id-var">Transfer</div>
                </div>
                <div className="payment-method-title1">
                  <div className="related-id-var">NULL</div>
                </div>
                <div className="creation-date-title1">
                  <div className="related-id-var">May 1, 2023</div>
                </div>
                <div className="amount-title1">
                  <div className="amount-and-dzd-container7">
                    <div className="related-id-var">400,000</div>
                    <div className="dzd7">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head1">
                <div className="transaction-id-title1">
                  <div className="related-id-var">#TR-0002</div>
                </div>
                <div className="related-id-title">
                  <div className="related-id-var">2</div>
                </div>
                <div className="full-name-title1">
                  <div className="related-id-var">Mansour Houssam</div>
                </div>
                <div className="article-name-title1">
                  <div className="related-id-var">منحة الوفاة</div>
                </div>
                <div className="type-title1">
                  <div className="related-id-var">Transfer</div>
                </div>
                <div className="payment-method-title1">
                  <div className="related-id-var">NULL</div>
                </div>
                <div className="creation-date-title1">
                  <div className="related-id-var">May 1, 2023</div>
                </div>
                <div className="amount-title1">
                  <div className="amount-and-dzd-container7">
                    <div className="related-id-var">400,000</div>
                    <div className="dzd7">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head1">
                <div className="transaction-id-title1">
                  <div className="related-id-var">#TR-0002</div>
                </div>
                <div className="related-id-title">
                  <div className="related-id-var">2</div>
                </div>
                <div className="full-name-title1">
                  <div className="related-id-var">Mansour Houssam</div>
                </div>
                <div className="article-name-title1">
                  <div className="related-id-var">منحة الوفاة</div>
                </div>
                <div className="type-title1">
                  <div className="related-id-var">Transfer</div>
                </div>
                <div className="payment-method-title1">
                  <div className="related-id-var">NULL</div>
                </div>
                <div className="creation-date-title1">
                  <div className="related-id-var">May 1, 2023</div>
                </div>
                <div className="amount-title1">
                  <div className="amount-and-dzd-container7">
                    <div className="related-id-var">400,000</div>
                    <div className="dzd7">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head1">
                <div className="transaction-id-title1">
                  <div className="related-id-var">#TR-0002</div>
                </div>
                <div className="related-id-title">
                  <div className="related-id-var">2</div>
                </div>
                <div className="full-name-title1">
                  <div className="related-id-var">Mansour Houssam</div>
                </div>
                <div className="article-name-title1">
                  <div className="related-id-var">منحة الوفاة</div>
                </div>
                <div className="type-title1">
                  <div className="related-id-var">Transfer</div>
                </div>
                <div className="payment-method-title1">
                  <div className="related-id-var">NULL</div>
                </div>
                <div className="creation-date-title1">
                  <div className="related-id-var">May 1, 2023</div>
                </div>
                <div className="amount-title1">
                  <div className="amount-and-dzd-container7">
                    <div className="related-id-var">400,000</div>
                    <div className="dzd7">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head1">
                <div className="transaction-id-title1">
                  <div className="related-id-var">#TR-0002</div>
                </div>
                <div className="related-id-title">
                  <div className="related-id-var">2</div>
                </div>
                <div className="full-name-title1">
                  <div className="related-id-var">Mansour Houssam</div>
                </div>
                <div className="article-name-title1">
                  <div className="related-id-var">منحة الوفاة</div>
                </div>
                <div className="type-title1">
                  <div className="related-id-var">Transfer</div>
                </div>
                <div className="payment-method-title1">
                  <div className="related-id-var">NULL</div>
                </div>
                <div className="creation-date-title1">
                  <div className="related-id-var">May 1, 2023</div>
                </div>
                <div className="amount-title1">
                  <div className="amount-and-dzd-container7">
                    <div className="related-id-var">400,000</div>
                    <div className="dzd7">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head1">
                <div className="transaction-id-title1">
                  <div className="related-id-var">#TR-0002</div>
                </div>
                <div className="related-id-title">
                  <div className="related-id-var">2</div>
                </div>
                <div className="full-name-title1">
                  <div className="related-id-var">Mansour Houssam</div>
                </div>
                <div className="article-name-title1">
                  <div className="related-id-var">منحة الوفاة</div>
                </div>
                <div className="type-title1">
                  <div className="related-id-var">Transfer</div>
                </div>
                <div className="payment-method-title1">
                  <div className="related-id-var">NULL</div>
                </div>
                <div className="creation-date-title1">
                  <div className="related-id-var">May 1, 2023</div>
                </div>
                <div className="amount-title1">
                  <div className="amount-and-dzd-container7">
                    <div className="related-id-var">400,000</div>
                    <div className="dzd7">DZD</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-details-container1">
          <div className="nbr-of-shows-transactions-deta1">
            <div className="related-id-tit">Showing</div>
            <div className="related-id-tit">6</div>
            <div className="related-id-tit">from</div>
            <div className="related-id-tit">160</div>
          </div>
          <div className="change-page-buttons1">
            <button className="btnprevious1" onClick={onBtnPreviousClick}>
              <div className="previous-icone1">
                <img className="back-ic-icon2" alt="" src="/backic.svg" />
                <img className="back-ic-icon2" alt="" src="/backic.svg" />
              </div>
              <div className="previous1">Previous</div>
            </button>
            <button className="btnnext1" onClick={onBtnNextClick}>
              <div className="previous1">Next</div>
              <div className="previous-icone1">
                <img className="next-ic-icon2" alt="" src="/nextic.svg" />
                <img className="next-ic-icon2" alt="" src="/nextic1.svg" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsOfTransfer;
