import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC onClick={() => console.log('clicked')} color='red'>
      DASDdsf
    </ChildAsFC>
  );
};

export default Parent;
