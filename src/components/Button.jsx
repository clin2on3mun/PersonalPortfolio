import PropTypes from 'prop-types'

const Button = ({link,classes,children})=>{
   return( 
   <a href={link} target="_blank" className={classes} rel="noreferrer">
         {children}
        </a>
   )
}
Button.propTypes = {
   link: PropTypes.string,
   classes: PropTypes.string,
   children: PropTypes.object,
 };


export default Button