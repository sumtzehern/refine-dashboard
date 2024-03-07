import { AuditOutlined, BranchesOutlined, CalendarOutlined, DashboardOutlined, ProjectOutlined, ProjectTwoTone, ShopOutlined, TeamOutlined } from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";

/**
 * Recourse in refine perform:
 * list -> get all records (read)
 * show -> get single record (read)
 * create -> create record
 * edit -> update record( update)
 * delet -> delete or clone a record
 */
export const resources: IResourceItem[ ] = [
    {
        name: 'dashboard',
        list: '/',
        meta: {
            label: 'Dashboard',
            icon: <DashboardOutlined />
        }
    },
    {
        name: 'companies',
        list: '/companies',
        show: '/companies/:id',
        create: '/companies/:id',
        edit: '/companies/edit/:id',
        meta: {
            label: 'Companies',
            icon: <ShopOutlined />
        }
    },
    {
        name: 'tasks',
        list: '/tasks',
        create: '/tasks/new',
        edit: '/tasks/edit/:id',
        meta: {
            label: 'Tasks',
            icon: <ProjectOutlined />
        }
    },
    {
        name: "events",
        list: "/calendar",
        create: "/calendar/create",
        edit: "/calendar/edit/:id",
        show: "/calendar/show/:id",
        meta: {
          label: "Calendar",
          icon: <CalendarOutlined />,
        },
    },
    {
        name: "project",
        meta: {
          label: "Project",
          icon: <BranchesOutlined />,
        },
      },
      {
        name: "ticket",
        list: "/project/ticket",
        create: "/project/ticket/create",
        edit: "/project/ticket/edit/:id",
        meta: {
          label: "Project Ticket",
          parent: "project",
        },
      },
      {
        name: "job",
        meta: {
          label: "Job",
          icon: <AuditOutlined />,
        },
      },
      {
        name: "quest",
        list: "/quest/ticket",
        create: "/quest/ticket/create",
        edit: "/quest/ticket/edit/:id",
        meta: {
          label: "Quest Board",
          parent: "job",
        },
      },
      {
        name: "contacts",
        list: "/contacts",
        create: "/contacts/create",
        edit: "/contacts/edit/:id",
        show: "/contacts/show/:id",
        meta: {
          label: "Contacts",
          icon: <TeamOutlined />,
        },
      },
    
]