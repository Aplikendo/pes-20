//@@viewOn:imports
import UU5 from "uu5g04";
import Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-app";

import Config from "./config/config.js";
import Bottom from "./bottom";
import Left from "./left";
import Trip from "../routes/trip";
import ParticipantManagement from "../routes/participant-management";
import LocationManagement from "../routes/location-management";
import About from "../routes/about";

import "./spa-ready.less";
import {TragConsumer} from "./trag-provider.js";
//@@viewOff:imports

export const SpaReady = UU5.Common.VisualComponent.create({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin, UU5.Common.PureRenderMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "SpaReady",
    classNames: {
      main: Config.CSS + "spaready"
    },
    opt: {
      pureRender: true // avoid re-render from parent
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overriding
  //@@viewOff:overriding

  //@@viewOn:private
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <TragConsumer {...this.getMainPropsToPass()}>
        {({ name }) => (
          <Plus4U5.App.Page
            top={<Plus4U5.App.Top content={name} />} // TopTitle
            bottom={<Bottom />}
            type={1}
            displayedLanguages={["cs", "en"]}
            left={<Left authenticated={true} />}
            leftWidth="!xs-320px !s-320px !m-256px l-256px xl-256px"
          >
            <UU5.Common.Router
              route=""
              notFoundRoute="trip"
              routes={{
                trip: { component: <Trip /> },
                "": "trip",
                participantManagement: {
                  component: <ParticipantManagement />
                },
                locationManagement: {
                  component: <LocationManagement />
                },
                about: { component: <About /> }
              }}
              controlled={false}
            />
          </Plus4U5.App.Page>
        )}
      </TragConsumer>
    );
  }
  //@@viewOff:render
});

export default SpaReady;
