const RecipeList = (props) => {
  return (
    <>
      <button onClick={props.onClick} value={props.value}>
        <figure>
          <img
            src={props.src}
            alt={props.title.replace("amp;", "")}
            onError={(e) => {
              onerror = null;
              (e.target as HTMLImageElement).src = "/noimg.png";
            }}
          />
        </figure>
        <h4>{props.title.replace("amp;", "")}</h4>
      </button>

      <style jsx>
        {`
          button {
            display: flex;
            justify-content: start;
            align-items: center;
            height: auto;
            max-width: 15rem;
            text-align: left;
            background-color: #fff;
            border: none;
          }

          @media screen and (max-width: 800px) {
            button {
              width: 10rem;
              align-content: center;
              flex-direction: column;

              border: 1px solid #f2f2f2;
            }
          }

          button:hover {
            cursor: pointer;
            background-color: #f9f5f3;
          }

          button:focus,
          button:active {
            outline: none;
          }

          button:active > figure > img {
            transform: scale(1.1);
            transition: transform 0.2s ease-in-out;
          }
          button:active > h4 {
            transform: scale(1.1);
            transition: transform 0.2s ease-in-out;
          }

          figure {
            width: 4rem;
            height: 4rem;
            position: relative;
            top: 0;
            display: block;
            margin: 0.5rem 0.5rem 0.5rem 0;

            border-radius: 50%;
          }

          figure:before {
            display: block;
            height: 100%;
            width: 100%;
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            background-image: linear-gradient(
              to right bottom,
              #fbdb89,
              #f48982
            );
            opacity: 0.2;
            border-radius: 50%;
          }

          figure img {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
          }

          h4 {
            color: #615551;
            font-size: 0.9rem;
          }
        `}
      </style>
    </>
  );
};

export default RecipeList;
