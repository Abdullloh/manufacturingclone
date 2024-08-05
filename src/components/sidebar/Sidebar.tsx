import {
  BgColorsOutlined,
  CheckCircleOutlined,
  CopyOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  LineHeightOutlined,
  SnippetsOutlined,
} from '@ant-design/icons';
import { Flex } from 'antd';
import { FC } from 'react';
import { Logo } from '../../shared/components/logo';
import { SidebarLink } from './SidebarLink';
import { StyledLink } from './styled';

const sidebarLink = [
  {
    icon: <SnippetsOutlined />,
    label: 'KATEGORIYA',
    path: '/cabinet/category',
  },
  {
    icon: <CopyOutlined />,
    label: 'SUBKATEGORIYA',
    path: '/cabinet/subcategory',
  },
  {
    icon: <LineHeightOutlined />,
    label: "O'LCHOV BIRLIGI",
    path: '/cabinet/dimensions',
  },
  {
    icon: <BgColorsOutlined />,
    label: 'MODEL',
    path: '/cabinet/model-types',
  },
  {
    icon: <DoubleRightOutlined />,
    label: 'KELGAN MAHSULOTLAR',
    path: '/cabinet/products/coming',
  },
  {
    icon: <CheckCircleOutlined />,
    label: 'OMBORDAGI MAHSULOTLAR',
    path: '/cabinet/products',
  },
  {
    icon: <DoubleLeftOutlined />,
    label: 'CHIQIB KETGAN MAHSULOTLAR',
    path: '/cabinet/products/exited',
  },
];

export const Sidebar: FC = () => {
  return (
    <Flex vertical justify="space-between" flex={1} style={{ background: 'rgb(15 23 42)' }}>
      <Flex vertical>
        <Logo />
        {sidebarLink.map((item, idx) => (
          <SidebarLink key={idx} {...item} />
        ))}
      </Flex>
      <StyledLink to="/" style={{ color: '#fff', background: '#2b4c77' }}>
        TIZIMDAN CHIQISH
      </StyledLink>
    </Flex>
  );
};
