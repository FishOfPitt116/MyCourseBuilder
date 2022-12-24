### generate-data.js

- Generate position of the nodes in an organized manner (tree-like structure)
- Vertical location based on number/levels of prereqs required
- Courses with no prereqs start with green nodes, other courses start with grey nodes

### generate-config.js

- Flexible to change as we see fit
- Maybe have gravity similar to original project as option?

### generate-events.js

- onClickNode => Child nodes should change colors when a node is clicked (implies class is taken)
- Maybe load more information about the class if node is double/right clicked?
- Maybe nodes aren't visible when you're unable to take a class?
- onClickLink => No real purpose yet

### Potential Present/Future Tasks

- New component: Options menu to toggle on/off certain graph features
- Update/establish css and website visuals