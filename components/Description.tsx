interface IDescription {
  description?: string;
  extraClassName?: string;
}

const Description = ({ description = '', extraClassName }: IDescription) => {
  return (
    <p
      className={`cursor-pointer text-sm block opacity-75 transition-opacity hover:opacity-100 ${extraClassName}`}
    >
      {description}
    </p>
  );
};

export default Description;
