interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}

      <div>
        <button onClick={onClick}>click me</button>
      </div>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <div>
        <button onClick={onClick}>click me</button>
      </div>
    </div>
  );
};
