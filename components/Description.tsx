import classJoin from '@libs/classJoin';

interface IDescription {
  description?: string;
  extraClassName?: string;
}

const Description = ({ description = '', extraClassName }: IDescription) => {
  return (
    <p
      className={classJoin([
        'cursor-pointer text-sm block opacity-75 transition-opacity hover:opacity-100',
        extraClassName ? extraClassName : ''
      ])}
    >
      {description}
    </p>
  );
};

export default Description;
