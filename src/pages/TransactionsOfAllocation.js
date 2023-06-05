import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TransactionsOfAllocation.css";
const TransactionsOfAllocation = () => {
  const navigate = useNavigate();

  const onPayoutButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onIncomeButtonClick = useCallback(() => {
    navigate("/transactionsofincome");
  }, [navigate]);

  const onTransferButtonClick = useCallback(() => {
    navigate("/transactionsoftransfer");
  }, [navigate]);

  const onBtnPreviousClick = useCallback(() => {
    //TODO: go to previous
  }, []);

  const onBtnNextClick = useCallback(() => {
    //TODO: go to next
  }, []);

  return (
    <div className="transactions-of-allocation">
      <div className="transactions-allocation-contai">
        <div className="buttonsbalancecontainersearc1">
          <div className="buttonsbalancecontainersear1">
            <div className="buttonsbalancecontainer1">
              <div className="transaction-types-buttons2">
                <button
                  className="payout-button2"
                  onClick={onPayoutButtonClick}
                >
                  <div className="payout2">Payout</div>
                </button>
                <button
                  className="income-button2"
                  onClick={onIncomeButtonClick}
                >
                  <div className="payout2">Income</div>
                </button>
                <button className="allocation-button2">
                  <div className="allocation2">Allocation</div>
                </button>
                <button
                  className="transfer-button2"
                  onClick={onTransferButtonClick}
                >
                  <div className="payout2">Transfer</div>
                </button>
              </div>
              <div className="balancecontainer1">
                <div className="text5">Total allocated balance</div>
                <div className="balance1">
                  <div className="amount-and-dzd-container13">
                    <div className="total-allocated-balance">2,000,000</div>
                    <div className="dzd13">DZD</div>
                  </div>
                </div>
              </div>
            </div>
            <input
              className="search-input2"
              type="text"
              placeholder="search here..."
            />
          </div>
          <div className="transactions-container2">
            <div className="t-head2">
              <div className="transaction-id-title2">
                <div className="text5">Transaction ID</div>
              </div>
              <div className="related-id-title1">
                <div className="text5">Related ID</div>
              </div>
              <div className="full-name-title2">
                <div className="text5">Full Name</div>
              </div>
              <div className="article-name-title2">
                <div className="text5">Article Name</div>
              </div>
              <div className="type-title2">
                <div className="text5">Type</div>
              </div>
              <div className="payment-method-title2">
                <div className="text5">Payment methode</div>
              </div>
              <div className="creation-date-title2">
                <div className="text5">Date</div>
              </div>
              <div className="amount-title2">
                <div className="text5">Amount</div>
              </div>
            </div>
            <div className="transactions-listing2">
              <div className="t-head2">
                <div className="transaction-id-title2">
                  <div className="transaction-id-var12">#TR-0002</div>
                </div>
                <div className="related-id-title1">
                  <div className="transaction-id-var12">2</div>
                </div>
                <div className="full-name-title2">
                  <div className="transaction-id-var12">Mansour Houssam</div>
                </div>
                <div className="article-name-title2">
                  <div className="transaction-id-var12">منحة الوفاة</div>
                </div>
                <div className="type-title2">
                  <div className="transaction-id-var12">Allocation</div>
                </div>
                <div className="payment-method-title2">
                  <div className="transaction-id-var12">NULL</div>
                </div>
                <div className="creation-date-title2">
                  <div className="transaction-id-var12">May 1, 2023</div>
                </div>
                <div className="amount-title2">
                  <div className="amount-and-dzd-container13">
                    <div className="transaction-id-var12">400,000</div>
                    <div className="dzd14">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head2">
                <div className="transaction-id-title2">
                  <div className="transaction-id-var12">#TR-0002</div>
                </div>
                <div className="related-id-title1">
                  <div className="transaction-id-var12">2</div>
                </div>
                <div className="full-name-title2">
                  <div className="transaction-id-var12">Mansour Houssam</div>
                </div>
                <div className="article-name-title2">
                  <div className="transaction-id-var12">منحة الوفاة</div>
                </div>
                <div className="type-title2">
                  <div className="transaction-id-var12">Allocation</div>
                </div>
                <div className="payment-method-title2">
                  <div className="transaction-id-var12">NULL</div>
                </div>
                <div className="creation-date-title2">
                  <div className="transaction-id-var12">May 1, 2023</div>
                </div>
                <div className="amount-title2">
                  <div className="amount-and-dzd-container13">
                    <div className="transaction-id-var12">400,000</div>
                    <div className="dzd14">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head2">
                <div className="transaction-id-title2">
                  <div className="transaction-id-var12">#TR-0002</div>
                </div>
                <div className="related-id-title1">
                  <div className="transaction-id-var12">2</div>
                </div>
                <div className="full-name-title2">
                  <div className="transaction-id-var12">Mansour Houssam</div>
                </div>
                <div className="article-name-title2">
                  <div className="transaction-id-var12">منحة الوفاة</div>
                </div>
                <div className="type-title2">
                  <div className="transaction-id-var12">Allocation</div>
                </div>
                <div className="payment-method-title2">
                  <div className="transaction-id-var12">NULL</div>
                </div>
                <div className="creation-date-title2">
                  <div className="transaction-id-var12">May 1, 2023</div>
                </div>
                <div className="amount-title2">
                  <div className="amount-and-dzd-container13">
                    <div className="transaction-id-var12">400,000</div>
                    <div className="dzd14">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head2">
                <div className="transaction-id-title2">
                  <div className="transaction-id-var12">#TR-0002</div>
                </div>
                <div className="related-id-title1">
                  <div className="transaction-id-var12">2</div>
                </div>
                <div className="full-name-title2">
                  <div className="transaction-id-var12">Mansour Houssam</div>
                </div>
                <div className="article-name-title2">
                  <div className="transaction-id-var12">منحة الوفاة</div>
                </div>
                <div className="type-title2">
                  <div className="transaction-id-var12">Allocation</div>
                </div>
                <div className="payment-method-title2">
                  <div className="transaction-id-var12">NULL</div>
                </div>
                <div className="creation-date-title2">
                  <div className="transaction-id-var12">May 1, 2023</div>
                </div>
                <div className="amount-title2">
                  <div className="amount-and-dzd-container13">
                    <div className="transaction-id-var12">400,000</div>
                    <div className="dzd14">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head2">
                <div className="transaction-id-title2">
                  <div className="transaction-id-var12">#TR-0002</div>
                </div>
                <div className="related-id-title1">
                  <div className="transaction-id-var12">2</div>
                </div>
                <div className="full-name-title2">
                  <div className="transaction-id-var12">Mansour Houssam</div>
                </div>
                <div className="article-name-title2">
                  <div className="transaction-id-var12">منحة الوفاة</div>
                </div>
                <div className="type-title2">
                  <div className="transaction-id-var12">Allocation</div>
                </div>
                <div className="payment-method-title2">
                  <div className="transaction-id-var12">NULL</div>
                </div>
                <div className="creation-date-title2">
                  <div className="transaction-id-var12">May 1, 2023</div>
                </div>
                <div className="amount-title2">
                  <div className="amount-and-dzd-container13">
                    <div className="transaction-id-var12">400,000</div>
                    <div className="dzd14">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head2">
                <div className="transaction-id-title2">
                  <div className="transaction-id-var12">#TR-0002</div>
                </div>
                <div className="related-id-title1">
                  <div className="transaction-id-var12">2</div>
                </div>
                <div className="full-name-title2">
                  <div className="transaction-id-var12">Mansour Houssam</div>
                </div>
                <div className="article-name-title2">
                  <div className="transaction-id-var12">منحة الوفاة</div>
                </div>
                <div className="type-title2">
                  <div className="transaction-id-var12">Allocation</div>
                </div>
                <div className="payment-method-title2">
                  <div className="transaction-id-var12">NULL</div>
                </div>
                <div className="creation-date-title2">
                  <div className="transaction-id-var12">May 1, 2023</div>
                </div>
                <div className="amount-title2">
                  <div className="amount-and-dzd-container13">
                    <div className="transaction-id-var12">400,000</div>
                    <div className="dzd14">DZD</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-details-container2">
          <div className="nbr-of-shows-transactions-deta2">
            <div className="text5">Showing</div>
            <div className="text5">6</div>
            <div className="text5">from</div>
            <div className="text5">160</div>
          </div>
          <div className="change-page-buttons2">
            <button className="btnprevious2" onClick={onBtnPreviousClick}>
              <div className="previous-icone2">
                <img className="back-ic-icon4" alt="" src="/backic.svg" />
                <img className="back-ic-icon4" alt="" src="/backic.svg" />
              </div>
              <div className="previous2">Previous</div>
            </button>
            <button className="btnnext2" onClick={onBtnNextClick}>
              <div className="previous2">Next</div>
              <div className="previous-icone2">
                <img className="next-ic-icon4" alt="" src="/nextic.svg" />
                <img className="next-ic-icon4" alt="" src="/nextic1.svg" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsOfAllocation;
