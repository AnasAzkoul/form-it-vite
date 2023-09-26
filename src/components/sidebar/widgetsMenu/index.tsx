import MenuSubHeader from '../MenuSubHeader';
import { widgetMenuItems } from './constants';
import DraggableWidget from './DraggableWidget';

const WidgetsMenu = () => {
  return (
    <div>
      <MenuSubHeader>choose a component</MenuSubHeader>
      <ul>
        {widgetMenuItems.map((widget, index) => (
          <li key={index}>
            <DraggableWidget widget={widget} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetsMenu;
