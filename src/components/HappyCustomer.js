import Marquee from "react-marquee-slider";
import styled from "styled-components";
import img1 from "../assets/img/people-1.jpg";
import img2 from "../assets/img/people-2.jpg";
import img3 from "../assets/img/people-3.jpg";
import img4 from "../assets/img/people-4.jpg";
import img5 from "../assets/img/people-5.jpg";
import img6 from "../assets/img/people-6.jpg";
import img7 from "../assets/img/people-7.jpg";
import img8 from "../assets/img/people-8.jpg";
import img9 from "../assets/img/people-9.jpg";
import img10 from "../assets/img/people-10.jpg";

export default function HappyCustomer() {
  const BoxClient = styled.div`
    width: 400px;
    height: 180px;
    border: 3px solid #6debb5;
    margin-right: 2rem;
    padding: .8rem;
    div > img {
      padding: 12px;
    }

  `;

  const Item = [
    {
      id: 1,
      photo: img1,
      name: "Jeremiah Dooley",
      jobTitle: "Direct Marketing Executive",
      text: "Sunt neque nam laborum voluptatem sed voluptatem beatae eligendi ut.",
    },
    {
      id: 2,
      photo: img2,
      name: "Catherine Treutel",
      jobTitle: "Customer Directives Strategist",
      text: "Provident quae aut earum accusantium quia qui. Officiis sit ut eum eum.",
    },
    {
      id: 3,
      photo: img3,
      name: "Lloyd McClure",
      jobTitle: "Forward Intranet Liaison",
      text: "Natus temporibus doloremque harum aspernatur sint. At laudantium sint rerum dolorem.",
    },
    {
      id: 4,
      photo: img4,
      name: "Elvira Boyer",
      jobTitle: "Direct Group Designer",
      text: "Vero omnis eligendi facere molestiae sequi sit quasi dolor quod. Enim error sed fugiat.",
    },

    {
      id: 5,
      photo: img5,
      name: "Jared Von DVM",
      jobTitle: "Forward Solutions Agent",
      text: "Voluptatibus rerum dignissimos voluptatem deserunt. Est ut eius eaque quae.",
    },
  ];

  const Item2 = [
    {
      id: 1,
      photo: img6,
      name: "Jeremiah Dooley",
      jobTitle: "Direct Marketing Executive",
      text: "Sunt neque nam laborum voluptatem sed voluptatem beatae eligendi ut.",
    },
    {
      id: 2,
      photo: img7,
      name: "Catherine Treutel",
      jobTitle: "Customer Directives Strategist",
      text: "Provident quae aut earum accusantium quia qui. Officiis sit ut eum eum.",
    },
    {
      id: 3,
      photo: img8,
      name: "Lloyd McClure",
      jobTitle: "Forward Intranet Liaison",
      text: "Natus temporibus doloremque harum aspernatur sint. At laudantium sint rerum dolorem.",
    },
    {
      id: 4,
      photo: img9,
      name: "Elvira Boyer",
      jobTitle: "Direct Group Designer",
      text: "Vero omnis eligendi facere molestiae sequi sit quasi dolor quod. Enim error sed fugiat.",
    },

    {
      id: 5,
      photo: img10,
      name: "Jared Von DVM",
      jobTitle: "Forward Solutions Agent",
      text: "Voluptatibus rerum dignissimos voluptatem deserunt. Est ut eius eaque quae.",
    },
  ];

  return (
    <>
      <h1 className="font-primary color-secondary text-center my-4">
        Our Happy Customer
      </h1>
      <div style={{ height: "220px" }}>
        <Marquee velocity={10}>
          {Item.map((item) => (
            <BoxClient className="d-flex align-items-center justify-contents-center">
              <div class="d-flex align-items-start justify-content-between">
                <img src={item.photo} fluid alt={item.name}/>
                <div>
                  <h5 className="font-primary color-secondary">{item.name}</h5>
                  <p className="font-secondary color-primary fs-12">
                    <u>
                      <b>{item.jobTitle}</b>
                    </u>
                    <br />
                    {item.text}
                  </p>
                </div>
              </div>
            </BoxClient>
          ))}
        </Marquee>
      </div>

      <div style={{ height: "220px" }}>
        <Marquee direction="ltr" velocity={10}>
          {Item2.map((item) => (
            <BoxClient className="d-flex align-items-center justify-contents-center">
              <div class="d-flex align-items-start justify-content-between">
                <img src={item.photo} fluid alt={item.name}/>
                <div>
                  <h5 className="font-primary color-secondary">{item.name}</h5>
                  <p className="font-secondary color-primary fs-12">
                    <u>
                      <b>{item.jobTitle}</b>
                    </u>
                    <br />
                    {item.text}
                  </p>
                </div>
              </div>
            </BoxClient>
          ))}
        </Marquee>
      </div>
    </>
  );
}
