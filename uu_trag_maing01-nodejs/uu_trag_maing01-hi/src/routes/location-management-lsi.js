export default {
  createSuccessHeader: {
    cs: "Lokace byla vytvořena",
    en: "Location was created"
  },

  createFailHeader: {
    cs: "Lokaci se nepodařilo vytvořit",
    en: "Failed to create location"
  },

  updateSuccessHeader: {
    cs: "Lokace byla upravena",
    en: "Location was updated"
  },

  updateFailHeader: {
    cs: "Lokaci se nepodařilo upravit",
    en: "Failed to update location"
  },

  deleteSuccessHeader: {
    cs: "Lokace byla odstraněna",
    en: "Location was deleted"
  },

  deleteFailHeader: {
    cs: "Lokaci se nepodařilo odstranit",
    en: "Failed to delete location"
  },

  rightsError: {
    cs: "K provedení akce nemáte dostatečná práva.",
    en: "You do not have sufficient rights for this action."
  },

  locationInUseError: {
    cs:
      'Lokace obsahuje zajezdy. Aby byla lokacea smazána, musíte v dialogu smazání zaškrtnout volbu "Smazat lokace i pokud obsahuje zajezdy"',
    en:
      'Location contains trips. To delete this location you have to check "Delete location assigned to trips" in the confirm dialog.'
  },
  locationNameNotUnique: {
    cs: "Název Lokace musí být unikátní.",
    en: "Location name must be unique."
  },

  unexpectedServerError: {
    cs: "Na serveru došlo k neočekávané chybě.",
    en: "Unexpected error occured"
  }
};
