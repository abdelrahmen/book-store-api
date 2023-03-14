let queries = require("../database/queries");
let connection = require("../database/connection");
const util = require("../util/string.generator");

exports.getStoresList = async (req, res) => {
  try {
    let query = queries.queryList.GET_STORE_LIST_QUERY;
    let result = await connection.query(query);
    return res.status(200).send(result.rows);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error });
  }
};

exports.saveStore = async (req, res) => {
  try {
    let storeName = req.query.storeName;
    let storeAddress = req.query.storeAddress;
    console.log(storeAddress +""+ storeName);
    if (!storeName || !storeAddress) {
      res.status(500).send({ error: "Store Name and address are required" });
    } else {
      let storeCode = util.generateStoreCode();
      let values = [storeName, storeCode, storeAddress];
      let saveStoreQuery = queries.queryList.SAVE_STORE_QUERY;
      let result = await connection.query(saveStoreQuery, values);
      res.status(200).send(result);
    }
  } catch (error) {}
};

// exports.saveNote = (req, res) => {
//   let sequenceId = generator.generate();
//   let title = req.body.title;
//   let content = req.body.content;
//   if (!title || !content) {
//     res.status(500).send({ error: "title and content are required" });
//   } else {
//     let Note = model.Note;
//     let noteObj = new Note(sequenceId, title, content, "admin", Date.now());
//     myStorage.store.setItem(sequenceId, noteObj);
//     res.status(200).send("note saved");
//   }
// };

// exports.updateNote = (req, res) => {
//   let noteId = req.body.noteId;
//   let title = req.body.title;
//   let content = req.body.content;
//   if (!title || !content || !noteId) {
//     res.status(500).send({ error: "title, content & note id are required" });
//   } else {
//     let Note = model.Note;
//     let noteObj = new Note(noteId, title, content, "admin", Date.now());
//     myStorage.store.setItem(sequenceId, noteObj);
//     res.status(200).send("note updated");
//   }
// };

// exports.deleteNote = (req, res) => {
//   let noteId = req.params.noteId;
//   if (!noteId) {
//     res.status(500).send({ error: "note Id is required" });
//   } else {
//     myStorage.store.removeItem(noteId);
//     res.status(200).send("note deleted");
//   }
// };
