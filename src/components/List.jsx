import PropTypes from 'prop-types'

const List = ({className,style,children})=>{
    return (
      <>
       <li className={className} style={style}>{children}</li>
      </>
    )
}

List.propTypes = {
  className: PropTypes.string,
  style: PropTypes.any,
  children: PropTypes.array,
};
export default List