exports.getRanking = async (req, res) => {
    try {
        console.log('here we should call the service to get the ranking')
        res.status(200).send({});
    } catch (error) {
        console.log(error)
        throw error
    }
  };