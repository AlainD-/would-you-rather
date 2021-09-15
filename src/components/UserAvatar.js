export default function UserAvatar({url, height = '90px', className = ''}) {
  return <img alt="avatar" src={url} height={height} className={className} />;
}
