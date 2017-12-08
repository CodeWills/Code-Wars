// Write a simple regex to validate a username.

// Allowed characters are:

// -lowercase letters -numbers -underscore

// length shoould be between 4 and 16 characters.

function validateUsr(username) {
  return /^[0-9a-z_]{4,16}$/.test(username)
}