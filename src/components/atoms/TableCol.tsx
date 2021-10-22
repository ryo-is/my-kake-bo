type Props = {
  width: string;
  text: string;
  addClass?: string;
};

export const TableCol = ({ width, text, addClass }: Props) => {
  return (
    <td width={width} className={'py-2 ' + addClass}>
      {text}
    </td>
  );
};
