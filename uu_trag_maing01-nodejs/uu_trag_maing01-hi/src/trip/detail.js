//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks";

import Config from "./config/config.js";
import Uri from "../helpers/uri-helpers.js";
import {nl2br} from "../helpers/string-helper";

import {TragConsumer} from "../core/trag-provider.js";
import "./detail.less";
import LSI from "./detail-lsi.js";
//@@viewOff:imports

export const Detail = UU5.Common.VisualComponent.create({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "Detail",
    classNames: {
      main: Config.CSS + "detail",
      rating: Config.CSS + "detail-rating",
      line: Config.CSS + "detail-line"
    },
    lsi: LSI
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    data: UU5.PropTypes.shape({
      id: UU5.PropTypes.string,
      name: UU5.PropTypes.string,
      text: UU5.PropTypes.string,
      averageRating: UU5.PropTypes.any,
      ratingCount: UU5.PropTypes.any,
      visibility: UU5.PropTypes.boolean,
      uuIdentityName: UU5.PropTypes.string,
      participantList: UU5.PropTypes.array,
      location: UU5.PropTypes.string,
      image: UU5.PropTypes.string
    })
  },
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
  _getLine(icon, content) {
    return (
      <UU5.Bricks.Div className={this.getClassName("line")}>
        <UU5.Bricks.Icon icon={icon} />
        {content}
      </UU5.Bricks.Div>
    );
  },

  _buildParticipantNames(participantList) {
    // for faster lookup
    let participantIds = new Set(this.props.data.participantList);
    return participantList
      .reduce((acc, participant) => {
        if (participantIds.has(participant.id)) {
          acc.push(participant.name);
        }
        return acc;
      }, [])
      .join(", ");
  },

  _getImage() {
    let imageUrl = Uri.getBinaryUrl(this.props.data.image);
    return <UU5.Bricks.Image src={imageUrl} authenticate />;
  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        {/* // Text */}
        <div>
          {// basic HTML tags are used to prevent possible uu5string from execution
          nl2br(this.props.data.text)}
        </div>
        {/* // Image */}
        {this.props.data.image && this._getImage()}
        <UU5.Bricks.Div className={this.getClassName("rating")}>
          <UU5.Bricks.Rating value={this.props.data.averageRating} />
          {/* // Rating Count */}
          {this.getLsiComponent("votes", null, this.props.data.ratingCount.toString())}
        </UU5.Bricks.Div>
        {this._getLine("mdi-calendar", this.props.data.location)}
        {/* // Participants */}
        <TragConsumer>
          {({ participantList }) => this._getLine("mdi-tag-multiple", this._buildParticipantNames(participantList))}
        </TragConsumer>
        {/* // Author */}
        {this._getLine("mdi-account", this.props.data.uuIdentityName)}
        {/* // Creation Date */}
        {this._getLine("mdi-calendar", <UU5.Bricks.DateTime value={this.props.data.sys.cts} dateOnly />)}
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default Detail;
