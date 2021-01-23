import { Router, Request, Response } from 'express';
import {filterImageFromURL, deleteLocalFiles} from '../../../util/util';

const router: Router = Router();


  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  // the endpoint accepts:
  // locally:
  // http://localhost:{{PORT}}/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg
  // developed on AWS Beanstalk:
  // http://{{EB_URL}}/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg
  /**************************************************************************** */

  /**
   * ===> Ristrutturare meglio il codice
   * come da server API: spostando da qui gli endpoint e usando i controllers
   * aggiungere più typescript e tipizzazione
   * aggiungere un file di configurazioni d'ambiente?
   */

  //! END @TODO1
// ===============
router.get('/',
// requireAuth,
async (req, res) => {
    let { image_url } = req.query;
    return res.status(200).send(image_url);
});
// ===============


export const FilteredimageRouter: Router = router;