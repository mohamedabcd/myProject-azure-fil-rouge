export const getStudents =  async (req,res) => {
    try {
        const allStudents = await student.find();

        res.status(200).json(allStudents);
    } catch (error) {
        
    }
   
}

export const createStudent =   (req,res) => {
    res.send('Router is working');
}