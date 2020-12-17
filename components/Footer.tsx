const Footer = (props) => {
  return (
    <>
      <div>
        <p>
          Credits for api, design and app idea goes to&nbsp;
          <a href="https://twitter.com/jonasschmedtman">Jonas Schmedtmann.</a>
        </p>
      </div>
      <style jsx>
        {`
          div {
            justify-self: end;
            background: #f9f5f3;
            font-size: 0.8rem;
            color: #615551;
            width: 100%;
            height: auto;
            border-radius: 0 0 15px 15px;
            padding: 2rem;
          }
        `}
      </style>
    </>
  );
};

export default Footer;
