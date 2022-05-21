

interface Props {
  children: React.ReactNode
}

const DarkLayout = ({ children } : Props) => {
  return (
    <div style={{
        backgroundColor: '#303030',
    }}>

      {children}
    </div>
  )
}

export default DarkLayout