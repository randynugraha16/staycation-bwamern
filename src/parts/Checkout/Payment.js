import React from "react";
import Fade from "react-reveal/Fade";
import InputFile from "../../components/Form/InputFile/InputFile";
import InputText from "../../components/Form/InputText/InputText";
import IconMandiri from "../../assets/icons/mandiri.jpg";
import IconBCA from "../../assets/icons/bca.jpg";

export default function Payment(props) {
  const { data, ItemDetails, checkout } = props;
  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;
  return (
    <Fade>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5 text-darkblue">
            <Fade delay={300}>
              <p className="mb-4">Transfer Pembayaran</p>
              <p>Tax: {tax}%</p>
              <p>Sub Total: ${subTotal} USD</p>
              <p>Total: ${grandTotal} USD</p>
              <div className="row mt-4">
                <div className="col-3 text-end">
                  <img src={IconBCA} alt="Bank Central Asia" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Central Asia</dd>
                    <dd>1234567</dd>
                    <dd>Randy Nugraha</dd>
                  </dl>
                </div>
              </div>
              <div className="row">
                <div className="col-3 text-end">
                  <img src={IconMandiri} alt="Bank Mandiri" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd>1234567</dd>
                    <dd>Randy Nugraha</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5">
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <InputFile
                type="file"
                accept="image/*"
                id="proofPayment"
                name="proofPayment"
                value={data.proofPayment}
                onChange={props.onChange}
              />
              <label htmlFor="bankName">Asal Bank</label>
              <InputText
                id="bankName"
                name="bankName"
                type="text"
                value={data.bankName}
                onChange={props.onChange}
              />
              <label htmlFor="bankHolder">Asal Bank</label>
              <InputText
                id="bankHolder"
                name="bankHolder"
                type="text"
                value={data.bankHolder}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
