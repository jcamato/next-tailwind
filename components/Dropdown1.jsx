import { Link } from 'next/link';
import { Menu } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function NextLink(props) {
  const { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
}

export default function Dropdown1(props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button
              className={classNames(
                open ? 'text-sky-400' : 'text-white',
                '"inline-flex justify-center w-full px-3 py-2 text-base font-medium  hover:text-sky-400 focus:outline-none"',
              )}
            >
              {props.children}
            </Menu.Button>
          </div>
          <Menu.Items className="absolute left-0 w-56 mt-4 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-2">
              {props.content.map((option) => {
                return (
                  <Menu.Item key={option.display}>
                    {({ active }) => (
                      <div
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'flex space-x-4 px-4 py-2 items-center w-full text-base font-medium',
                        )}
                      >
                        <i className="material-icons">{option.icon}</i>
                        <a href={option.link}>{option.display}</a>
                      </div>
                    )}
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}
