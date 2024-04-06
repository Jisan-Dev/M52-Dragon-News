import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

function App() {
  return (
    <>
      <h1 className="text-4xl">Hello world</h1>
      <NavigationMenu className="border border-r-2">
        <NavigationMenuList className="border border-red-600">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent className="p-4 ">
              <div className="w-[1000px]">
                <h1>ak ksaksm akmaksm</h1>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

export default App;
