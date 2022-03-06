import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(() => ({
    container:{

    },
    appBar: {
        
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color:'#42a5f5',
        
        
        
          
    },
    heading: {
        backgroundColor: " #8BC6EC",
        backgroundImage: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
        color:"white",
        
    },

    appBarInput:{
        
        marginTop: '2rem',
        

    },
    form: {
        margin: 'auto',
    },
    root: {
        
        margin: '0 auto',
        textAlign: 'center',
    }
  
    
}))