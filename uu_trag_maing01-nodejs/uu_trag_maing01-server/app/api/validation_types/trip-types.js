/* eslint-disable */
const tripCreateDtoInType = shape({
  name: uu5String(255).isRequired(),
  text: uu5String(4000),
  dateFrom:date(),
  dateTo: date(),
  participantList: array(id(), 20),
  location: uu5String(255),
  image: binary()
});

const tripGetDtoInType = shape({
  id: id().isRequired()
});

const tripUpdateDtoInType = shape({
  id: id().isRequired(),
  name: uu5String(255),
  text: uu5String(4000),
  participantList: array(id(), 20),
  location: uu5String(255),
  image: binary()
});

const tripUpdateVisibilityDtoInType = shape({
  id: id().isRequired(),
  visibility: boolean().isRequired()
});

const tripDeleteDtoInType = shape({
  id: id().isRequired()
});

const tripListDtoInType = shape({
  sortBy: oneOf(["name", "rating"]),
  order: oneOf(["asc", "desc"]),
  participantList: array(id(), 10),
  pageInfo: shape({
    pageIndex: integer(),
    pageSize: integer()
  })
});

const tripAddRatingDtoInType = shape({
  id: id().isRequired(),
  rating: integer(5).isRequired()
});
