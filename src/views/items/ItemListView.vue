<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      style="width: 100%"
      height="700px"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" />
      <el-table-column prop="title" label="货品" />
      <el-table-column prop="title" label="缩略图" fit="true">
        <img class="maxbox" width="100%" src="https://cdn1.keyouyun.com/389974/img/2022/d1ca912f5b0c8a5b28a6b42e38b17ea5.webp" alt="image not found">
      </el-table-column>
      <el-table-column prop="skuName" label="sku属性" />
      <el-table-column prop="skuCode" label="sku码" />
      <el-table-column prop="costPrice" label="成本价">
        <!-- 这个header用起来有问题,会卡住，先临时把单位放到下面
        <template slot="header" slot-scope="scope">
          成本价{{ scope.row.currency }}
        </template> -->
        <template slot-scope="scope">
          {{ scope.row.costPrice }}({{ scope.row.currency }})
        </template>
      </el-table-column>
      <el-table-column prop="size" label="尺寸（长*宽*高）">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.length }}*{{ scope.row.width }}*{{ scope.row.height }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="weight" label="重量" />
      <el-table-column label="配对状态" fit="true">
        <template slot-scope="scope">
          <span style="margin-left: 10px">
            <span v-if="scope.row.combinedScItem"> 是 </span>
            <span v-else>否</span>
          </span></template>
      </el-table-column>
      <el-table-column prop="gmtModified" label="更新时间" />
      <el-table-column label="操作" fixed="right" width="250">
        <el-button-group>
          <el-tooltip class="item" effect="dark" content="编辑" placement="top">
            <el-button type="primary" icon="el-icon-edit" @click="updateItem" />
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="删除" placement="top">
            <el-button type="primary" icon="el-icon-delete" />
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="复制" placement="top">
            <el-button type="primary" icon="el-icon-document-copy" />
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="配对" placement="top">
            <el-button type="primary" icon="el-icon-refresh" />
          </el-tooltip>
        </el-button-group>
      </el-table-column>
    </el-table>
    <div class="pagbox">
      <el-row type="flex" class="row-bg">
        <el-pagination
          :current-page="page"
          :page-sizes="[10,50,100]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        />
        <!-- 后端分页 -->
        <el-button type="primary" :disabled="!hasNext" @click="getData">加载更多</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
import { listItems } from '@/api/table'

export default {
  data() {
    return {
      tableData: [
        {
          id: 922080,
          loginId: 'syq534121271@gmail.com',
          title: '样例',
          skuCode: '7672838197248',
          currency: 'CNY',
          skuName: '白色,大',
          costPrice: 10.0,
          length: 10,
          width: 20,
          height: 30,
          weight: 1000.0,
          images: [
            'https://cdn1.keyouyun.com/389974/img/2022/d1ca912f5b0c8a5b28a6b42e38b17ea5.webp',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
          ],
          skuImage: 'https://cdn1.keyouyun.com/389974/img/2022/d1ca912f5b0c8a5b28a6b42e38b17ea5.webp',
          gmtCreate: '2022-04-11T14:43:25Z',
          gmtModified: '2022-04-11T14:43:25Z',
          scItemId: 2022041162248144,
          platform: -1,
          source: {
            code: 1,
            message: '手工新增'
          },
          type: 0,
          combinedScItem: false
        },
        {
          id: 922081,
          loginId: 'syq534121271@gmail.com',
          title: '样例',
          skuCode: '7672838197249',
          currency: 'CNY',
          skuName: '黑色,大',
          costPrice: 300.0,
          length: 10,
          width: 20,
          height: 30,
          weight: 1000.0,
          images: [
            'https://cdn1.keyouyun.com/389974/img/2022/d1ca912f5b0c8a5b28a6b42e38b17ea5.webp',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
          ],
          gmtCreate: '2022-04-11T14:43:25Z',
          gmtModified: '2022-04-11T14:43:25Z',
          scItemId: 2022041132341056,
          platform: -1,
          source: {
            code: 1,
            message: '手工新增'
          },
          type: 0,
          combinedScItem: true
        }
      ],
      total: 50,
      pageSize: 10,
      page: 1,
      hasNext: true
    }
  },
  methods: {
    getData: function(val) {
      console.log(val, 'todo load more')
      listItems()
      // get more data
    },
    updateItem: function(val) {
      // get item id
      console.log(val, 'go to update page')
    },
    deleteItem: function(val) {
      console.log(val, 'delete')
    }
  }
}
</script>

<style scoped>
.pagbox{
margin-top:20px
}

/* 图片大小固定， 超过大小等比例缩放*/
.maxbox{
max-height: 145px;
max-width:120px;
vertical-align: middle
}

</style>
