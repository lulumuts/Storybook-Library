   <template>
    <div class="navigation-icon">
      <img :src="iconSrc" :alt=icon />
    </div>
  </template>
  

  <script lang="ts">
import { defineComponent} from 'vue';

import dashboardIcon from "@/assets/img/Icons/dashboardIcon.svg";
import WorkflowIcon from '@/assets/img/Icons/workflowIcon.svg';
import ProjectTeamIcon from '@/assets/img/Icons/projectTeamIcon.svg';
import OrganisationIcon from '@/assets/img/Icons/organisationIcon.svg';
import GovernanceIcon from '@/assets/img/Icons/governanceIcon.svg';
import AuditingIcon from '@/assets/img/Icons/auditingIcon.svg';
import PermissionIcon from '@/assets/img/Icons/permissionIcon.svg';

export default defineComponent({
  name: 'NavigationIcon',
  props: {
    icon: {
      type: String,
      required: true,
      validator: (value: string): boolean => {
          const validValues = [
          'dashboardIcon',
          'workflowIcon',
          'projectTeamIcon',
          'organisationIcon',
          'governanceIcon',
          'auditingIcon',
          'permissionIcon',
          ];
          return validValues.includes(value);
      },
    },
  },
  computed: {
    iconSrc():string {
      switch (this.icon) {
        case 'dashboardIcon':
          return dashboardIcon;
        case 'workflowIcon':
          return WorkflowIcon;
        case 'projectTeamIcon':
          return ProjectTeamIcon;
        case 'organisationIcon':
          return OrganisationIcon;
        case 'governanceIcon':
          return GovernanceIcon;
        case 'auditingIcon':
          return AuditingIcon;
        case 'permissionIcon':
          return PermissionIcon;
        default:
          return ''; 
      }
    },
  },
});
</script>
  
  