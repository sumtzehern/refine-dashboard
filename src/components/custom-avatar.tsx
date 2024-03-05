import { getNameInitials } from "@/utilities";
import { Avatar as AntdAvatar, AvatarProps } from "antd"

type Props = AvatarProps & {
  name?: string;
}

const CustomAvatar = ({ name, style, ...rest }: Props) => {
  return (
    <AntdAvatar 
        alt={'Code Master'}
        size="small" 
        style={{
            backgroundColor: '#87do68',
            display: 'flex',
            alignItems: 'center',
            border: 'none',
            ...style
        }} {...rest}>
        {getNameInitials(name || "")}
    </AntdAvatar>
  )
}

export default CustomAvatar