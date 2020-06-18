import UU5 from "uu5g04";

export const About = {
  licence: {
    organisation: {
      cs: {
        name: "Unicorn a.s.",
        uri: "https://www.unicorn.com/"
      },
      en: {
        name: "Unicorn a.s.",
        uri: "https://www.unicorn.com/"
      }
    },
  },

  usedTechnologies: {
    technologies: {
      en: [
        <UU5.Bricks.LinkUAF />,
        <UU5.Bricks.LinkUuApp />,
        <UU5.Bricks.LinkUU5 />,
        <UU5.Bricks.LinkUuPlus4U5 />,
        <UU5.Bricks.Link
          content="uuProductCatalogue"
          href="https://uuapp.plus4u.net/uu-bookkit-maing01/7f743efd1bf6486d8e72b27a0df92ba7/book"
          target="_blank"
        />,
        <UU5.Bricks.LinkUuAppServer />,
        <UU5.Bricks.LinkUuOIDC />,
        <UU5.Bricks.LinkUuCloud />
      ]
    },
    content: {
      cs: [
        `<uu5string/>Dále byly použity technologie: <UU5.Bricks.LinkHTML5/>, <UU5.Bricks.LinkCSS/>, <UU5.Bricks.LinkJavaScript/>, <UU5.Bricks.LinkMaterialDesign/>,
        <UU5.Bricks.LinkReact/> a <UU5.Bricks.LinkDocker/>.
        Aplikace je provozována v rámci internetové služby <UU5.Bricks.LinkPlus4U/> s využitím cloudu <UU5.Bricks.LinkMSAzure/>.
        Technickou dokumentaci lze nalézt v knize <UU5.Bricks.Link href="https://uuapp.plus4u.net/uu-bookkit-maing01/71f8d7b5cfdc4336b0abfe47b3cb237b/book" target="_blank" content='uuTragg01' />.`
      ],
      en: [
        `<uu5string/>Other used technologies: <UU5.Bricks.LinkHTML5/>, <UU5.Bricks.LinkCSS/>, <UU5.Bricks.LinkJavaScript/>, <UU5.Bricks.LinkMaterialDesign/>,
        <UU5.Bricks.LinkReact/> a <UU5.Bricks.LinkDocker/>.
        Application is operated in the <UU5.Bricks.LinkPlus4U/> internet service with the usage of <UU5.Bricks.LinkMSAzure/> cloud.
        Technical documentation can be found in <UU5.Bricks.Link href="https://uuapp.plus4u.net/uu-bookkit-maing01/71f8d7b5cfdc4336b0abfe47b3cb237b/book" target="_blank" content='uuTragg01' />.`
      ]
    }
  }
};

export default About;
