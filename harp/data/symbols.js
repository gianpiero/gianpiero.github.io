/**
 * Harp Signs & Symbols — Quiz Data
 * =================================
 * Edit this file to add, remove, or update symbols.
 *
 * Each entry has:
 *   name    — The symbol's display name (shown as an answer option in the quiz)
 *   meaning — A clear explanation of what the symbol means (revealed after answering)
 *   sign    — Image filename WITHOUT extension  →  images/symbols/<sign>.png
 *   ext     — (optional) Image file extension, defaults to "png". Set to "svg" for SVGs.
 *
 * Place image files in:  images/symbols/<sign>.<ext>
 * If an image is missing the quiz still works — it shows a placeholder instead.
 *
 * Minimum 4 symbols required for the quiz to run.
 */

const SYMBOLS_DATA = [
  {
    name: "Bracket",
    meaning: "Pace these notes together.",
    sign: "bracket"
  },
  {
    name: "Crescendo",
    meaning: "Gradually grow louder (get lauder).",
    sign: "crescendo"
  },
  {
    name: "Decrescendo",
    meaning: "Gradually grow softer (get quieter).",
    sign: "decrescendo"
  },
  {
    name: "Flat",
    meaning: "Lowers the pitch.",
    sign: "flat"
  },
  {
    name: "Forte",
    meaning: "Play loudly.",
    sign: "forte"
  },
  {
    name: "Fortissimo",
    meaning: "Play very loudly.",
    sign: "fortissimo"
  },
  {
    name: "Glissando",
    meaning: "Slide the finger on the strings between the notes indicated.",
    sign: "glissando"
  },
  {
    name: "Left Hand",
    meaning: "Play with your left hand.",
    sign: "left_hand"
  },
  {
    name: "Mezzo Forte",
    meaning: "Play moderately loudly.",
    sign: "mezzo_forte"
  },
  {
    name: "Mezzo Piano",
    meaning: "Play moderately softly.",
    sign: "mezzo_piano"
  },
  {
    name: "Muffle",
    meaning: "Dampen (stop) the vibrating strings.",
    sign: "muffle"
  },
  {
    name: "Natural",
    meaning: "Cancels a previous sharp or flat, returning the note to its unaltered pitch.",
    sign: "natural"
  },
  {
    name: "Octave",
    meaning: "Play these notes one octave (eight notes) higher.",
    sign: "octave"
  },
  {
    name: "Pianissimo",
    meaning: "Play very softly.",
    sign: "pianissimo"
  },
  {
    name: "Piano",
    meaning: "Play softly.",
    sign: "piano"
  },
  {
    name: "Right Hand",
    meaning: "Play with your right hand.",
    sign: "right_hand"
  },
  {
    name: "Ritardando",
    meaning: "Gradually play slower (get slower).",
    sign: "ritardando"
  },
  {
    name: "Sharp",
    meaning: "Raises the pitch.",
    sign: "sharp"
  },
  {
    name: "Simile",
    meaning: "Continue in the same manner.",
    sign: "simile"
  }
];
