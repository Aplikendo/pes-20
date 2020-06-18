export default {
  createSuccessHeader: {
    cs: "Ucastnik byl vytvořen",
    en: "Participant was created"
  },

  createFailHeader: {
    cs: "Ucastnika se nepodařilo vytvořit",
    en: "Failed to create participant"
  },

  updateSuccessHeader: {
    cs: "Ucastnik byl upraven",
    en: "Participant was updated"
  },

  updateFailHeader: {
    cs: "Ucastnika se nepodařilo upravit",
    en: "Failed to update participant"
  },

  deleteSuccessHeader: {
    cs: "Ucastnik byl odstraněn",
    en: "Participant was deleted"
  },

  deleteFailHeader: {
    cs: "Ucastnika se nepodařilo odstranit",
    en: "Failed to delete participant"
  },

  rightsError: {
    cs: "K provedení akce nemáte dostatečná práva.",
    en: "You do not have sufficient rights for this action."
  },

  participantInUseError: {
    cs:
      'Ucastnik obsahuje zajezdy. Aby byl ucastnik smazán, musíte v dialogu smazání zaškrtnout volbu "Smazat ucastnika i pokud obsahuje zajezdy"',
    en:
      'Participant contains trips. To delete this participant you have to check "Delete participant assigned to trips" in the confirm dialog.'
  },
  participantNameNotUnique: {
    cs: "Název ucastnik musí být unikátní.",
    en: "Participant name must be unique."
  },

  unexpectedServerError: {
    cs: "Na serveru došlo k neočekávané chybě.",
    en: "Unexpected error occured"
  }
};
