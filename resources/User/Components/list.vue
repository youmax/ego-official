<template>
  <div class="_plekan_list animated active">
    <span class="_plekan_list_title">Component List</span>
    <button type="button"
            @click="openModuleList"
            class="plekan-open-module-list">
      <i class="fa fa-angle-left"></i>
    </button>
    <div id="plekan-module-sortable-list">
      <span class="plekan-list-item"
            v-for="(l,key) in list"
            href="#"
            v-bind:data-index="key">
        <img class="plekan-move-row"
             :src="$plekanutils.makeUrl(l.thumbnail,$thumbnailPath)" />
      </span>
    </div>
  </div>
</template>

<script>
import store from '@/Store';
import Sortable from 'sortablejs';
import { listSortableOptions } from '@/Core/sortable_options';
export default {
  data() {
    return {
      store,
    };
  },
  computed: {
    list() {
      return this.store.state.moduleList;
    },
  },
  mounted() {
    /*
    * Sortable options init
    */
    const el = document.getElementById('plekan-module-sortable-list');
    Sortable.create(el, {
      ...listSortableOptions,
      onRemove: (e) => {
        const index = e.clone.dataset.index;
        this.addRow(index, e.newIndex);
        this.attachEvent();
      },
    });
    this.attachEvent();
  },
  methods: {
    openModuleList() {
      document.querySelector('._plekan_list').classList.toggle('active');
      document.querySelector('._plekan_list').classList.toggle('deactive');
    },
    attachEvent() {
      const els = this.$el.querySelectorAll('.plekan-list-item');
      Object.keys(els).map((i) => {
        els[i].onclick = (evt) => {
          evt.preventDefault();
          this.addRow(els[i].dataset.index);
        };
        return true;
      });
    },
    addRow(rowindex, sortindex) {
      const tmprow = this.list[rowindex];
      this.store.addRow(tmprow, sortindex);
    },
  },
};
</script>