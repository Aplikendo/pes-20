import Lsi from "../config/lsi.js";

export default {
  list: {
    cs: "Seznam zajezdů",
    en: "List of trips"
  },
  create: {
    cs: "Vytvořit zajezd",
    en: "Create trip"
  },
  createHeader: {
    cs: "Vytvořit zajezd",
    en: "Create trip"
  },
  updateHeader: {
    cs: "Upravit zajezd",
    en: "Update trip"
  },
  deleteHeader: {
    cs: "Smazat zajezd",
    en: "Delete trip"
  },

  deleteConfirm: {
    cs: 'Tato akce je nevratná. Opravdu chcete smazat zajezd s názvem "%s"?',
    en: 'This action is permanent. Are you sure you want to delete trip "%s"?'
  },
  ...Lsi.buttons,

  filterByParticipant: {
    cs: "Ucastnik",
    en: "Participant"
  },

  filterByImage: {
    cs: "Obrázku",
    en: "Image"
  },

  filterByUser: {
    cs: "Uživatele",
    en: "User"
  },

  filterByVisibility: {
    cs: "Publikace",
    en: "Published"
  },

  filterByRating: {
    cs: "Hodnocení",
    en: "Rating"
  }
};
