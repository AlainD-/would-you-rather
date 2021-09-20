export default function UserAvatar({url, height = '90px', className = ''}) {
  return (
    <div className="flex align-items-center justify-content-center">
      <img alt="avatar" src={url} height={height} className={className} />
    </div>
  );
}
